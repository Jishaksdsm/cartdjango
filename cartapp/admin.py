from django.contrib import admin
from .models import Product, CartItem

admin.site.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'image')

@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ('product', 'quantity')