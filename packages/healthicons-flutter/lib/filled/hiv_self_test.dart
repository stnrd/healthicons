import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HivSelfTest extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HivSelfTest({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2139 9.86335L20.7913 11.1468C20.5648 11.2318 20.3963 11.3804 20.2879 11.5593H38.6917C39.7963 11.5593 40.6917 12.4548 40.6917 13.5593C40.6917 14.6639 39.7963 15.5593 38.6917 15.5593H24.8349C24.9021 15.8116 24.9862 16.1512 25.0724 16.5593H28.6917C29.7963 16.5593 30.6917 17.4548 30.6917 18.5593C30.6917 19.6639 29.7963 20.5593 28.6917 20.5593H25.5241C25.5268 20.8876 25.5201 21.2219 25.5019 21.5593H27.6917C28.7963 21.5593 29.6917 22.4548 29.6917 23.5593C29.6917 24.6639 28.7963 25.5593 27.6917 25.5593H24.6127C24.4611 25.902 24.2869 26.2364 24.0878 26.5593H25.6917C26.7963 26.5593 27.6917 27.4548 27.6917 28.5593C27.6917 29.6639 26.7963 30.5593 25.6917 30.5593H16.6917C16.5669 30.5593 16.4447 30.5479 16.3262 30.526C15.962 30.5481 15.584 30.5594 15.1917 30.5594C10.8537 30.5594 7.14164 27.4456 6.38701 23.1738L6.16082 21.8934C5.3031 17.038 7.94222 12.2405 12.5024 10.3655L22.7547 6.15005C23.5997 5.8026 24.5727 6.07355 25.1166 6.80772C25.9058 7.87317 25.4554 9.39779 24.2139 9.86335Z" fill="#333333"/>
<path d="M38.0001 26C39.6801 26 41.0001 24.7429 41.0001 23.1429C41.0001 21.6571 38.0001 18 38.0001 18C38.0001 18 35.0001 21.5429 35.0001 23.1429C35.0001 24.7429 36.3201 26 38.0001 26Z" fill="#333333"/>
<path d="M39.425 41.3849C39.2725 41.7509 38.9181 41.9923 38.5216 42.0001C38.1251 42.0079 37.7615 41.7807 37.5947 41.4209L34.8127 35.4209C34.5804 34.9199 34.7983 34.3254 35.2993 34.093C35.8004 33.8607 36.3949 34.0786 36.6272 34.5796L38.4531 38.5176L40.0789 34.6156C40.2913 34.1058 40.8768 33.8648 41.3866 34.0772C41.8964 34.2896 42.1374 34.8751 41.925 35.3849L39.425 41.3849Z" fill="#333333"/>
<path d="M21.22 34.0002C20.6677 34.0002 20.22 34.4479 20.22 35.0002V41.0002C20.22 41.5525 20.6677 42.0002 21.22 42.0002C21.7723 42.0002 22.22 41.5525 22.22 41.0002V39.0003H25.22V41.0003C25.22 41.5525 25.6677 42.0003 26.22 42.0003C26.7723 42.0003 27.22 41.5525 27.22 41.0003V35.0003C27.22 34.448 26.7723 34.0003 26.22 34.0003C25.6677 34.0003 25.22 34.448 25.22 35.0003V37.0003H22.22V35.0002C22.22 34.4479 21.7723 34.0002 21.22 34.0002Z" fill="#333333"/>
<path d="M28.72 35.0003C28.72 34.448 29.1677 34.0003 29.72 34.0003H32.72C33.2723 34.0003 33.72 34.448 33.72 35.0003C33.72 35.5525 33.2723 36.0003 32.72 36.0003H32.22V40.0003H32.72C33.2723 40.0003 33.72 40.448 33.72 41.0003C33.72 41.5525 33.2723 42.0003 32.72 42.0003H29.72C29.1677 42.0003 28.72 41.5525 28.72 41.0003C28.72 40.448 29.1677 40.0003 29.72 40.0003H30.22V36.0003H29.72C29.1677 36.0003 28.72 35.5525 28.72 35.0003Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}