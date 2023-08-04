from django.shortcuts import render, redirect, get_object_or_404
from .models import Product, CartItem

def product_list(request):
    products = Product.objects.all()
    return render(request, 'product_list.html', {'products': products})

def cart_view(request):
    cart_items = CartItem.objects.all()
    total_amount = sum(item.product.price * item.quantity for item in cart_items)
    return render(request, 'cart.html', {'cart_items': cart_items, 'total_amount': total_amount})

def add_to_cart(request, product_id):
    product = get_object_or_404(Product, pk=product_id)

    try:
        cart_item = CartItem.objects.get(product=product)
        cart_item.quantity += 1
        cart_item.save()
    except CartItem.DoesNotExist:
        CartItem.objects.create(product=product, quantity=1)

    return redirect('cart')

def remove_from_cart(request, product_id):
    product = get_object_or_404(Product, pk=product_id)

    try:
        cart_item = CartItem.objects.get(product=product)
        if cart_item.quantity > 1:
            cart_item.quantity -= 1
            cart_item.save()
        else:
            cart_item.delete()
    except CartItem.DoesNotExist:
        pass  # Handle if the item is not in the cart

    return redirect('cart')
