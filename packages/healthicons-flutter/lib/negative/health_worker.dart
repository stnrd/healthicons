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
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM17 28.0126C17.5028 27.8981 19 30 19 30H22.0639L23.5481 30.0001H23.5483H23.5504H23.5519C24.1406 30.0002 24.5686 30.0002 25.6851 30H29C29 30 30.4972 27.8981 31 28.0126C36.4042 29.2434 42 32.7946 42 36.5699V42H6V36.5699C6 32.7946 11.5958 29.2434 17 28.0126ZM32 34V32H34V34H36V36H34V38H32V36H30V34H32ZM32 16C32 20.4183 28.4183 24 24 24C19.5817 24 16 20.4183 16 16C16 11.5817 19.5817 8 24 8C28.4183 8 32 11.5817 32 16ZM34 16C34 21.5228 29.5228 26 24 26C18.4772 26 14 21.5228 14 16C14 10.4772 18.4772 6 24 6C29.5228 6 34 10.4772 34 16Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}