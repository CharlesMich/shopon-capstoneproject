from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .catagories import seed_catagories, undo_catagories
from .reviews import seed_reviews, undo_reviews
from .orders import seed_orders, undo_orders
from .orderitems import seed_orderitems, undo_orderitem
from .carts import seed_carts, undo_carts
from .cartproducts import seed_cartproducts, undo_cartproducts 
from .productimages import seed_productimages, undo_productimages

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_productimages()
        undo_cartproducts()
        undo_carts()
        undo_orderitem()
        undo_orders()
        undo_reviews()
        undo_products()
        undo_catagories()
        undo_users()
    seed_users()
    seed_catagories()
    seed_products()
    seed_reviews()
    seed_orders()
    seed_orderitems()
    seed_carts()
    seed_cartproducts()
    seed_productimages()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_productimages()
    undo_cartproducts()
    undo_carts()
    undo_orderitem()
    undo_orders()
    undo_reviews()
    undo_products()
    undo_catagories()
    undo_users()
    # Add other undo functions here