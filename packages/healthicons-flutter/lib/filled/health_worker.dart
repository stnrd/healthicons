import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HealthWorker extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HealthWorker({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 28.0126C17.5028 27.8982 19 30 19 30L23.5481 30.0001C24.1387 30.0002 24.5663 30.0002 25.6851 30H29C29 30 30.4972 27.8982 31 28.0126C36.4042 29.2434 42 32.7946 42 36.5699V42H6V36.5699C6 32.7946 11.5958 29.2434 17 28.0126ZM32 34V32H34V34H36V36H34V38H32V36H30V34H32Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 24C28.4183 24 32 20.4183 32 16C32 11.5817 28.4183 8 24 8C19.5817 8 16 11.5817 16 16C16 20.4183 19.5817 24 24 24ZM24 26C29.5228 26 34 21.5228 34 16C34 10.4772 29.5228 6 24 6C18.4772 6 14 10.4772 14 16C14 21.5228 18.4772 26 24 26Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}