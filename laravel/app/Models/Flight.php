<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Flight extends Model
{
    use HasFactory;

    // protected $primaryKey = 'flight_id';
    protected $fillable = [
        'date',
        'airline_id',
        'limit',
    ];

    public function travel(): HasMany // works
    {
        return $this->hasMany(Travel::class);
    }

    public function airline(): BelongsTo
    {
       return $this->belongsTo(Airline::class);
    }


}
