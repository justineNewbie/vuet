<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function save()
    {
        for(i=$numberOfRows; i<$numberOfRows; i++)
        {
            $user = ['user_name' => 'name1', 'name' => 'name2', 'email' => 'testemail@gmail.com'];
        }
        User::insert($user);
    }
}
