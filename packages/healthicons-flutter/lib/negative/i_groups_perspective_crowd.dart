import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IGroupsPerspectiveCrowd extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const IGroupsPerspectiveCrowd({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM18 16.5C18 18.9862 15.9862 21 13.5 21C11.0138 21 9 18.9862 9 16.5C9 14.0138 11.0138 12 13.5 12C15.9862 12 18 14.0138 18 16.5ZM13.5 23C10.3294 23 4 24.7867 4 28.3333V36H23V28.3333C23 24.7867 16.6706 23 13.5 23ZM39 16.5C39 18.9862 36.9862 21 34.5 21C32.0137 21 30 18.9862 30 16.5C30 14.0138 32.0137 12 34.5 12C36.9862 12 39 14.0138 39 16.5ZM24 18C25.6575 18 27 16.6575 27 15C27 13.3425 25.6575 12 24 12C22.3425 12 21 13.3425 21 15C21 16.6575 22.3425 18 24 18ZM25 28.3333C25 24.7867 31.3294 23 34.5 23C37.6706 23 44 24.7867 44 28.3333V36H25V28.3333ZM27.9625 22.4975C28.2206 22.3873 28.4839 22.2831 28.7508 22.185C27.2282 21.3961 25.2701 21 24 21C22.7298 21 20.7717 21.3961 19.2491 22.185C19.5161 22.2831 19.7794 22.3873 20.0374 22.4975C21.2085 22.998 22.3912 23.6741 23.3099 24.5785C23.556 24.8208 23.7895 25.0864 24 25.375C24.2105 25.0864 24.444 24.8208 24.69 24.5785C25.6088 23.6741 26.7914 22.998 27.9625 22.4975Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}