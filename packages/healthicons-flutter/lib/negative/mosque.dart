import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Mosque extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Mosque({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM9.49995 14.2978C8.46393 14.2978 7.46056 14.5296 6.19482 14.9323C7.02706 11.0436 9.5 6.04785 9.5 6.04785C9.5 6.04785 11.9012 10.8619 12.7924 14.9283C11.5326 14.528 10.5325 14.2978 9.49995 14.2978ZM12.6837 16.9965L13 17.1019L13 42.0479H6V17.1019L6.31617 16.9965C7.8014 16.5014 8.67155 16.2978 9.49995 16.2978C10.3283 16.2978 11.1985 16.5014 12.6837 16.9965ZM17 32.0479V28.0479H31V32.0479H29V31.0479C29 30.4956 28.5523 30.0479 28 30.0479C27.4477 30.0479 27 30.4956 27 31.0479V32.0479L25 32.0479V31.0479C25 30.4956 24.5523 30.0479 24 30.0479C23.4477 30.0479 23 30.4956 23 31.0479V32.0479L21 32.0479V31.0479C21 30.4956 20.5523 30.0479 20 30.0479C19.4477 30.0479 19 30.4956 19 31.0479V32.0479L17 32.0479ZM15.7932 26.0479H32.2068C32.7164 24.8915 33 23.552 33 22.0478C33 18.2829 29.8246 15.5493 27.1642 13.259C26.3624 12.5687 25.6073 11.9187 25 11.2928V8.04785H23V11.2928C22.3927 11.9187 21.6377 12.5687 20.8358 13.259C18.1754 15.5493 15 18.2829 15 22.0478C15 23.552 15.2836 24.8915 15.7932 26.0479ZM35 17.1019L35.3162 16.9965C36.8014 16.5014 37.6716 16.2978 38.5 16.2978C39.3283 16.2978 40.1985 16.5014 41.6837 16.9965C41.7886 17.0315 41.8952 17.0481 42 17.0481V42.0479H35V17.1019ZM38.4999 14.2978C37.4639 14.2978 36.4606 14.5296 35.1948 14.9323C36.0271 11.0436 38.5 6.04785 38.5 6.04785C38.5 6.04785 40.9012 10.8619 41.7924 14.9283C40.5326 14.528 39.5325 14.2978 38.4999 14.2978ZM33 34.0479V42.0479H28.9999V40.9286C28.9999 39.3745 28.0998 37.9611 26.6915 37.3039L23.9999 36.0478L21.3084 37.3039C19.9001 37.9611 18.9999 39.3745 18.9999 40.9286V42.0479H15V34.0479H33Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}