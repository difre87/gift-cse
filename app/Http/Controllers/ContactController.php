<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function sendMail(Request $request)
    {

        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'cse' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email'   => 'required|email',
            'message' => 'required|string',
        ]);

        Mail::to('contact@gift-cse.com')->send(new ContactFormMail($validated));

        return redirect()->back()->with('success', 'Message envoyé avec succès.');
    }
}
