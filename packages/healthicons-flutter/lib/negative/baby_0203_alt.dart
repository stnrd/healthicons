import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Baby0203Alt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Baby0203Alt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.25H48V48.25H0V0.25ZM23.9999 18.25C27.3138 18.25 30 15.5638 30 12.2501C30 8.93635 27.3138 6.25 23.9999 6.25C20.6862 6.25 18 8.93635 18 12.2501C18 15.5638 20.6862 18.25 23.9999 18.25ZM15 34.2911V16.6968C15.9892 17.104 17.0121 17.5964 18.0469 18.1627C18.2384 18.2724 18.4277 18.3783 18.615 18.4804C20.7695 19.7108 22.9581 21.2511 24.9861 23.0024C28.5648 26.093 31.556 29.7655 33 33.4364V34.2911C33 38.2705 30.1875 42.2498 24 42.2498C17.8125 42.2498 15 37.702 15 34.2911ZM26.2933 21.4887C25.8794 21.1313 25.4587 20.7818 25.0324 20.4411C27.49 20.4357 29.9579 19.428 33 17.2498V29.0806C31.2616 26.328 28.893 23.7338 26.2933 21.4887Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="48" height="48" fill="white" transform="translate(0 0.25)"/>
</clipPath>
</defs>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}