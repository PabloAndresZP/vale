import 'package:flutter/material.dart';
import 'package:aleee/src/pages/GiftAnimationPage.dart';
import 'package:aleee/src/widgets/custom_snackbar_content.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false, // Esto elimina el banner de depuración
      title: 'Regalo para Aleee',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.pink),
        useMaterial3: true,
        fontFamily: 'FlameRegular',
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
  int _errorCount = 0;

  void _checkAnswer() {
    if (_controller.text.trim().toLowerCase() == 'papitas') {
      Navigator.of(context).push(
        MaterialPageRoute(builder: (context) => const GiftAnimationPage()),
      );
      CustomSnackbarContent.show(
        context,
        "Bien Aleee ganaste un vale",
        true,
        imageAsset: 'assets/images/ilus_01.png',
      );
    } else {
      setState(() {
        _errorCount++;
        String message;
        String imagePath;

        if (_errorCount % 2 == 1) {
          message = "Tu puedes Aleee prueba otra vez";
          imagePath = 'assets/images/ilus_02.png';
        } else {
          message = "Aleee no me hagas renegar";
          imagePath = 'assets/images/ilus_03.png';
          
        }

        CustomSnackbarContent.show(
          context,
          message,
          false,
          imageAsset: imagePath,
        );
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFE2D6C7),
      body: Padding(
        padding: const EdgeInsets.only(top: 120.0, left: 16.0, right: 16.0), // Ajuste del padding superior
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            Text(
              'Querida Aleee, antes de recibir tu regalo debes resolver el siguiente acertijo:',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 22.0,
                fontFamily: 'FlameBold',
                color: Color(0xFFC63128),
              ),
            ),
            const SizedBox(height: 20),
            Text(
              'Cuando nos vemos y estamos cerca del bloque solemos decir: "Vamos por unas ..."',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 15.0,
                fontFamily: 'FlameRegular',
                color: Color(0xFFC63128),
              ),
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _controller,
              decoration: InputDecoration(
                hintText: 'Escribe aquí tu respuesta :)',
                hintStyle: TextStyle(color: Color(0xFF4F170B), fontSize: 10.0,), // Color del placeholder
              ),
            ),
            const SizedBox(height: 20),
            SizedBox(
              width: double.infinity, // Hacer que el botón sea tan ancho como el texto
              child: OutlinedButton(
                onPressed: _checkAnswer,
                child: Text(
                  'Confirmar',
                  style: TextStyle(
                    fontFamily: 'FlameRegular',
                    fontSize: 12.0,
                    color: Color(0xFFC63128),
                  ),
                ),
                style: OutlinedButton.styleFrom(
                  side: BorderSide(color: Color(0xFF4F170B)), // Contorno del botón
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
