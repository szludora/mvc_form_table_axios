<?php

namespace App\Http\Controllers;

use App\Models\Flight;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //return Flight::with('travel')->get();
        return Flight::with('travel:id,flight_id', 'airline:id,name,country')->get();

//        return Flight::with('travel:evaluation,user_id', 'airline')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $flight = new Flight();
        $flight->date = $request->input('date');
        $flight->airline_id = $request->input('airline_id');
        $flight->limit = $request->input('limit');
        $flight->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Flight $flight)
    {
        return $flight;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Flight $flight)
    {
        $flight->date = $request->input('date');
        $flight->airline_id = $request->input('airline_id');
        $flight->limit = $request->input('limit');
        $flight->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $flight = Flight::findOrFail($id)->delete();
    }
}
