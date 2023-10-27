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
      duration: const Duration(seconds: 5),
      vsync: this,
    );

    // Definir la animación
    _animation = IntTween(begin: 0, end: 82).animate(CurvedAnimation(
      parent: _controller,
      curve: Curves.linear,
    ));

    // Retraso de 3 segundos antes de comenzar la animación
    Future.delayed(const Duration(seconds: 5), () {
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
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text('Tu Regalo Animado'),
      ),
      body: Center(
        child: AnimatedBuilder(
          animation: _animation,
          builder: (context, child) {
            String frame = _animation.value.toString().padLeft(5, '0');
            return RepaintBoundary(
              child: Image.asset('assets/images/papitas_$frame.png'),
            );
          },
        ),
      ),
    );
  }
}
