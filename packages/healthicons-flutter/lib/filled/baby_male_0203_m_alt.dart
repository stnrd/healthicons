import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BabyMale0203MAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BabyMale0203MAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9999 18C36.3138 18 39 15.3138 39 12.0001C39 8.68635 36.3138 6 32.9999 6C29.6862 6 27 8.68635 27 12.0001C27 15.3138 29.6862 18 32.9999 18Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C15.3137 22 18 19.3137 18 16C18 14.7042 17.5892 13.5043 16.8907 12.5235L20 9.41421V11C20 11.5523 20.4477 12 21 12C21.5523 12 22 11.5523 22 11V7C22 6.44772 21.5523 6 21 6H17C16.4477 6 16 6.44772 16 7C16 7.55228 16.4477 8 17 8H18.5858L15.4765 11.1093C14.4957 10.4108 13.2958 10 12 10C8.68629 10 6 12.6863 6 16C6 19.3137 8.68629 22 12 22ZM12 20C14.2091 20 16 18.2091 16 16C16 13.7909 14.2091 12 12 12C9.79086 12 8 13.7909 8 16C8 18.2091 9.79086 20 12 20Z" fill="#333333"/>
<path d="M33 42C26.8125 42 24 37.4522 24 34.0413V16.447C24.9892 16.8543 26.0121 17.3466 27.0469 17.913C27.2384 18.0226 27.4277 18.1285 27.615 18.2307C29.7695 19.461 31.9581 21.0013 33.9861 22.7526C37.5648 25.8432 40.556 29.5157 42 33.1867V34.0413C42 38.0207 39.1875 42 33 42Z" fill="#333333"/>
<path d="M35.2933 21.2389C34.8794 20.8815 34.4587 20.532 34.0324 20.1913C36.49 20.186 38.9579 19.1783 42 17V28.8309C40.2616 26.0782 37.893 23.484 35.2933 21.2389Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}