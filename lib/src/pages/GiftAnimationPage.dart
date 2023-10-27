import 'package:flutter/material.dart';

class GiftAnimationPage extends StatefulWidget {
  const GiftAnimationPage({super.key});

  @override
  _GiftAnimationPageState createState() => _GiftAnimationPageState();
}

class _GiftAnimationPageState extends State<GiftAnimationPage>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller;
  late final Animation<int> _animation;
  bool _isAnimationReady = false;

  @override
  void initState() {
    super.initState();

    // Inicializar el controlador de animación
    _controller = AnimationController(
      duration: const Duration(seconds: 4),
      vsync: this,
    );

    // Definir la animación
    _animation = IntTween(begin: 0, end: 47).animate(CurvedAnimation(
      parent: _controller,
      curve: Curves.linear,
    ));

    // Retraso de 3 segundos antes de comenzar la animación
    Future.delayed(const Duration(seconds: 3), () {
      setState(() {
        _isAnimationReady = true;
      });

      _controller.forward();
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (!_isAnimationReady) {
      return const Scaffold(
        body: Center(
          child: CircularProgressIndicator(),
        ),
        backgroundColor: Color(0xFFE2D6C7), // Color de fondo agregado aquí
      );
    }

    return Scaffold(
      body: Stack(
        children: [
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            child: AnimatedBuilder(
              animation: _animation,
              builder: (context, child) {
                String frame = _animation.value.toString().padLeft(5, '0');
                return RepaintBoundary(
                  child: Image.asset('assets/images/papitas_$frame.png', gaplessPlayback: true),
                );
              },
            ),
          ),
        ],
      ),
      backgroundColor: Color(0xFFE2D6C7), // Color de fondo agregado aquí
    );
  }
}

