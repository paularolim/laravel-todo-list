<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Todo List</title>
</head>

<body style="background-color: #eaebee;">
    <div id="app">
        <app></app>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
