<!DOCTYPE html>
<html>

<head>
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/css/app.css'])
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{ asset('favicon.png') }}" type="image/png">
</head>

<body>
    @inertia
</body>

</html>
