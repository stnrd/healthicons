import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg0 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg0({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 18C13 13.0294 17.0294 9 22 9H26C28.3033 9 30.4106 9.86913 32.0007 11.2924C33.837 12.9359 35 15.334 35 18V30C35 34.9706 30.9706 39 26 39H22C19.334 39 16.9359 37.837 15.2924 36.0007C13.8691 34.4106 13 32.3033 13 30V18ZM22 11C18.134 11 15 14.134 15 18V30C15 31.7921 15.6747 33.4291 16.7827 34.6669C18.0631 36.0976 19.9269 37 22 37H26C29.866 37 33 33.866 33 30V18C33 15.9269 32.0976 14.0631 30.6669 12.7827C29.4291 11.6747 27.7921 11 26 11H22ZM22 15C20.3431 15 19 16.3431 19 18V25.8173L25.5902 15H22ZM17 18C17 15.2386 19.2386 13 22 13H26C26.5437 13 27.0687 13.0867 27.5613 13.2483C27.8514 13.3436 28.0821 13.5661 28.1877 13.8525C28.2933 14.139 28.2623 14.458 28.1035 14.7188L18.854 29.9011C18.6208 30.2839 18.1614 30.4647 17.7298 30.3436C17.2983 30.2225 17 29.829 17 29.3808V18ZM30.1631 16.457C30.5768 16.5425 30.8922 16.8787 30.951 17.2971C30.9834 17.5273 31 17.762 31 18V30C31 32.7614 28.7614 35 26 35H22C21.1659 35 20.3768 34.7958 19.6821 34.4317C19.4373 34.3034 19.2565 34.0795 19.1827 33.8132C19.1088 33.5468 19.1485 33.2618 19.2923 33.0257L29.1067 16.9161C29.3265 16.5553 29.7494 16.3715 30.1631 16.457ZM21.6613 32.9813C21.7723 32.9936 21.8853 33 22 33H26C27.6569 33 29 31.6569 29 30V20.9354L21.6613 32.9813Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}