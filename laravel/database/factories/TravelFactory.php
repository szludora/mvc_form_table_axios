<?php

namespace Database\Factories;

use App\Models\Flight;
use App\Models\Travel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Travel>
 */
class TravelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'evaluation' => fake('hu_HU')->realText(40),
            'flight_id' => Flight::all()->random()->id,
            'user_id' => User::all()->random()->id,
        ];
    }
}
