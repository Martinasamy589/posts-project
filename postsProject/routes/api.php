<?php
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/posts',function(){
    return Post::all();
});

Route::post('/posts', function (Request $request) {
    // Assuming you're validating the incoming data and creating a new post
    $post = Post::create([
        'title' => $request->input('title'),
        'content' => $request->input('content'),
    ]);
    return response()->json($post, 201);
});
Route::put('/posts/{post}',function(post $post){
    $post->update([
        'title' => request('title'),
        'content' => request('content'),

    ]);
    return response()->json($post, 200);
});