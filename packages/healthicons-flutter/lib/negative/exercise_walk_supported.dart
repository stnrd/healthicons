import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ExerciseWalkSupported extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ExerciseWalkSupported({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24.8252 13.2C26.8135 13.2 28.4253 11.5882 28.4253 9.60001C28.4253 7.61178 26.8135 6 24.8252 6C22.837 6 21.2252 7.61178 21.2252 9.60001C21.2252 11.5882 22.837 13.2 24.8252 13.2ZM23.7517 28H38C39.1046 28 40 28.8954 40 30V42H42V30C42 27.7909 40.2091 26 38 26H33.79C33.7947 25.9535 33.7977 25.9064 33.7991 25.8589C33.8323 24.7549 32.9641 23.833 31.86 23.7999C30.7895 23.7678 30.1137 23.6349 29.643 23.4511C29.211 23.2824 28.8723 23.0404 28.5247 22.6354C28.1449 22.193 27.7531 21.5549 27.2568 20.5687C26.9036 19.867 26.5361 19.07 26.0979 18.1195L26.0979 18.1194L26.0973 18.1181C25.916 17.7248 25.7226 17.3053 25.513 16.8555C25.0046 15.7637 24.221 14.7746 23.1077 14.199C21.9465 13.5987 20.6451 13.5637 19.4034 14.0252C18.8334 14.237 18.4063 14.6134 18.1234 14.9119C17.8172 15.235 17.5441 15.6125 17.3051 16.0045C16.8258 16.7902 16.3975 17.775 16.0807 18.8561C15.49 20.8718 15.2152 23.4782 15.9639 26H10C7.79086 26 6 27.7909 6 30V42H8V30C8 28.8954 8.89543 28 10 28H18.0566L25.1523 35.0014L27.6651 40.7958C28.1045 41.8092 29.2823 42.2744 30.2957 41.835C31.3091 41.3955 31.7743 40.2178 31.3349 39.2044L28.6678 33.0543C28.566 32.8194 28.4199 32.6062 28.2377 32.4264L23.7517 28ZM23.848 26L24.3625 23.6269C24.7056 24.2125 25.0737 24.7564 25.4895 25.2408C25.7248 25.5149 25.9737 25.7682 26.2396 26H23.848ZM19.7865 32.9389L16.4862 29.7735L16.122 31.2266L14.7801 35.7549L12.8005 38.9456C12.2182 39.8842 12.507 41.1172 13.4456 41.6995C14.3842 42.2818 15.6172 41.993 16.1995 41.0544L18.3208 37.6353C18.4148 37.4837 18.4882 37.3202 18.5389 37.1492L19.7865 32.9389Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}