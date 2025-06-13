<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Nouveau message</title>
</head>

<body>
    <h2>Message de {{ $data['name'] }}</h2>
    <p><strong>Email :</strong> {{ $data['email'] }}</p>
    <p><strong>Téléphone :</strong> {{ $data['phone'] }}</p>
    <p><strong>Nom CSE :</strong> {{ $data['cse'] }}</p>
    <p><strong>Message :</strong></p>
    <p>{{ $data['message'] }}</p>
</body>

</html>
