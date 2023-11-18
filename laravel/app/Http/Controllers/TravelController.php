<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use Illuminate\Http\Request;

class TravelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Travel::with('user:id,name,email')->with("flight")->get();
        return Travel::without('created_at')->with('flight:id,date,airline')->with('user:id,name,email')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $travel = new Travel();
        $travel->evaluation = $request->input('evaluation');
        $travel->flight_id = $request->input('flight_id');
        $travel->user_id = $request->input('user_id');
        $travel->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Travel::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $travel = Travel::findOrFail($id);
        $travel->evaluation = $request->input('evaluation');
        $travel->flight_id = $request->input('flight_id');
        $travel->user_id = $request->input('user_id');
        $travel->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $travel = Travel::findOrFail($id)->delete();
    }
}
