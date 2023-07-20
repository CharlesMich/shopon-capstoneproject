from flask import Blueprint, request
from app.models import db, Review
from app.forms import ReviewForm
from flask_login import login_required, current_user

review_route = Blueprint('review', __name__)


# get all reviews;
@review_route.route('/', methods=["GET"])
def getAllReviews():
    reviews = Review.query.all()
    return [review.to_dict() for review in reviews]




#  get all reviews of a user
@review_route.route('/user/<int:id>', methods=["GET"])
def getUserReviews(id):
    reviews = Review.query.filter(Review.user_id == id).order_by(Review.id.desc())
    return [review.to_dict() for review in reviews]


#  get all reviews of a product(single)
@review_route.route('/product/<int:id>', methods=["GET"])
def getProductReviews(id):
    reviews = Review.query.filter(Review.product_id == id).all()
    return [review.to_dict() for review in reviews]


# post review
@review_route.route('/new', methods = ["GET", "POST"])
def postReview():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    data = form.data
    print(data)
    if form.validate_on_submit():
        newReview = Review(
            product_id = data['product_id'],
            user_id = data['user_id'],
            review = data['review'],
            rating= data['rating']
        )
        db.session.add(newReview)
        db.session.commit()
        return newReview.to_dict()
    return {"error": "Review Rejected"}

# update review
@review_route.route('/update/<int:id>', methods = ["GET", "POST"])
def updateReview(id):
    review = Review.query.filter(Review.id == id).first()
    if request.method == "POST":
        data = request.get_json()
        update_review_review = data.get('review')
        review.review = update_review_review
        update_review_rating = data.get('rating')
        review.rating = update_review_rating
        db.session.commit()
        return review.to_dict()
    return {"error": "Review Rejected"}

# delete review
@review_route.route('/delete/<int:id>', methods = ["GET", "POST"])
def deleteReview(id):
    print(id)
    review = Review.query.filter(Review.id == id).first()
    print(review)
    db.session.delete(review)
    db.session.commit()
    return {"message": "Successfully Deleted"}
