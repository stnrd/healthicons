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
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.4253 9.60001C28.4253 11.5882 26.8135 13.2 24.8252 13.2C22.837 13.2 21.2252 11.5882 21.2252 9.60001C21.2252 7.61178 22.837 6 24.8252 6C26.8135 6 28.4253 7.61178 28.4253 9.60001ZM38 28H23.7517L28.2377 32.4264C28.4199 32.6062 28.566 32.8194 28.6678 33.0543L31.3349 39.2044C31.7743 40.2178 31.3091 41.3955 30.2957 41.835C29.2823 42.2744 28.1045 41.8092 27.6651 40.7958L25.1523 35.0014L18.0566 28H10C8.89543 28 8 28.8954 8 30V42H6V30C6 27.7909 7.79086 26 10 26H15.9639C15.2152 23.4782 15.49 20.8718 16.0807 18.8561C16.3975 17.775 16.8258 16.7902 17.3051 16.0045C17.5441 15.6125 17.8172 15.235 18.1234 14.9119C18.4063 14.6134 18.8334 14.237 19.4033 14.0252C20.6451 13.5637 21.9465 13.5987 23.1077 14.199C24.221 14.7746 25.0046 15.7637 25.513 16.8555C25.7226 17.3053 25.916 17.7248 26.0973 18.1181L26.0979 18.1194C26.5361 19.0699 26.9036 19.867 27.2568 20.5687C27.7531 21.5549 28.1449 22.193 28.5247 22.6354C28.8723 23.0404 29.211 23.2824 29.643 23.4511C30.1137 23.6349 30.7895 23.7678 31.86 23.7999C32.9641 23.833 33.8323 24.7549 33.7991 25.8589C33.7977 25.9064 33.7947 25.9535 33.79 26H38C40.2091 26 42 27.7909 42 30V42H40V30C40 28.8954 39.1046 28 38 28ZM24.3625 23.6269L23.848 26H26.2396C25.9737 25.7682 25.7248 25.5149 25.4895 25.2408C25.0737 24.7564 24.7056 24.2125 24.3625 23.6269ZM16.4862 29.7735L19.7865 32.9389L18.5389 37.1492C18.4882 37.3202 18.4148 37.4837 18.3208 37.6353L16.1995 41.0544C15.6172 41.993 14.3842 42.2818 13.4456 41.6995C12.507 41.1172 12.2182 39.8842 12.8005 38.9456L14.7801 35.7549L16.122 31.2266L16.4862 29.7735Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}