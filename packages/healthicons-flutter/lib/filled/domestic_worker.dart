import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DomesticWorker extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const DomesticWorker({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 25C27.4373 25 30 22.4179 30 19.5C30 16.5821 27.4373 14 24 14C20.5627 14 18 16.5821 18 19.5C18 22.4179 20.5627 25 24 25ZM24 27C28.4183 27 32 23.6421 32 19.5C32 15.3579 28.4183 12 24 12C19.5817 12 16 15.3579 16 19.5C16 23.6421 19.5817 27 24 27Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0001 5.94287L28.6216 7.52742C30.6426 8.22032 32 10.1207 32 12.2572L31.9999 19L29.9999 19L30 12.2572C30 10.9753 29.1855 9.83505 27.973 9.41931L24.0001 8.05716L20.027 9.41933C18.8144 9.83506 18 10.9753 18 12.2572L17.9999 19L15.9999 19L16 12.2571C16 10.1207 17.3574 8.22033 19.3784 7.52744L24.0001 5.94287Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 37C22.2091 37 24 35.2092 24 33C24 35.2092 25.7909 37 28 37C30.2091 37 32 35.2092 32 33C32 31.5856 31.2659 30.3427 30.1579 29.6314C35.8542 30.6968 42 33.1224 42 37V42H6V37C6 33.1224 12.1458 30.6968 17.8421 29.6314C16.7341 30.3427 16 31.5856 16 33C16 35.2092 17.7909 37 20 37ZM14 42V36H12V42H14ZM36 36V42H34V36H36Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0595 29.7859C17.5086 32.7282 20.4448 35 24 35C27.5552 35 30.4914 32.7282 30.9405 29.7859C30.2882 29.6503 29.6378 29.5324 28.9991 29.4321C28.9997 29.4547 29 29.4773 29 29.5C29 31.4301 26.7681 32.9953 24.0124 33H24H23.9876C21.2319 32.9953 19 31.4301 19 29.5C19 29.4773 19.0003 29.4547 19.0009 29.4321C18.3622 29.5324 17.7118 29.6503 17.0595 29.7859Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}