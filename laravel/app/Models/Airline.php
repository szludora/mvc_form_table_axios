<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Airline extends Model
{
    use HasFactory;

    // protected $primaryKey = 'airline_id';
    protected $fillable = [
        'name',
        'country',
    ];

    protected $hidden = ['created_at', 'updated_at'];

    public function flight(): HasMany
    {
        return $this->hasMany(Flight::class);
    }

}

