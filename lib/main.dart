import 'package:flutter/material.dart';
import 'package:aleee/src/pages/GiftAnimationPage.dart'; // Importando la página GiftAnimationPage

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Regalo para Aleee',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.pink),
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final TextEditingController _controller = TextEditingController();
  String _message = '';

  void _checkAnswer() {
    if (_controller.text.trim().toLowerCase() == 'papitas') {
      Navigator.of(context).push(
        MaterialPageRoute(builder: (context) => const GiftAnimationPage()),
      );
    } else {
      setState(() {
        _message = 'Inténtalo de nuevo';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Acertijo para Aleee'),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Text(
                'Querida Aleee, antes de recibir tu regalo debes resolver el siguiente acertijo:',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 20.0),
              ),
              const SizedBox(height: 20),
              const Text(
                'Cuando nos vemos y estamos cerca del bloque solemos decir: "Vamos por unas ..."',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 18.0),
              ),
              const SizedBox(height: 20),
              TextField(
                controller: _controller,
                decoration: InputDecoration(
                  hintText: 'Escribe aquí tu respuesta',
                  errorText: _message.isNotEmpty ? _message : null,
                ),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: _checkAnswer,
                child: const Text('Confirmar'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
