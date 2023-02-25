<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class FrontController extends Controller
{
  public function index()
  {
    return view('front');
  }

  public function allProducts(){
    $products = Product::limit(12)->get();
    return response()->json($products);
  }
  
}
