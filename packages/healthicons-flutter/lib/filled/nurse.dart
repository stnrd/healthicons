import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Nurse extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Nurse({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 6C21.1943 6 17.7625 7.02621 15.7359 7.73119C14.7482 8.0748 14.2528 9.14841 14.58 10.1417L16.7278 16.662C16.2604 17.6789 16 18.8103 16 20C16 24.4183 19.5817 28 24 28C28.4183 28 32 24.4183 32 20C32 18.8103 31.7396 17.6789 31.2721 16.6619L33.42 10.1417C33.7472 9.14841 33.2518 8.0748 32.2641 7.73119C30.2375 7.02621 26.8056 6 24 6ZM18.3799 18.425C22.1365 16.8821 25.8635 16.8821 29.6201 18.425C29.6807 18.4498 29.743 18.4685 29.8063 18.481C29.9327 18.9656 30 19.4746 30 20C30 23.3137 27.3137 26 24 26C20.6863 26 18 23.3137 18 20C18 19.4746 18.0673 18.9656 18.1937 18.481C18.257 18.4685 18.3193 18.4498 18.3799 18.425ZM25 11H27V13H25V15H23V13H21V11H23V9H25V11Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.8508 32.1931L16.8786 28C16.8786 28 6 31.3932 6 35.4669V42.0002H42V35.4669C42 31.3932 31.1214 28 31.1214 28L25.1492 32.1931C24.4596 32.6773 23.5404 32.6773 22.8508 32.1931ZM32 32H34V34H36V36H34V38H32V36H30V34H32V32Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}