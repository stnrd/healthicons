import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ContraceptiveVoucher extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ContraceptiveVoucher({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.293 36.7072C32.2903 39.3777 28.3346 41 24 41C14.6112 41 7 33.3888 7 24C7 19.6654 8.62226 15.7097 11.2928 12.707L35.293 36.7072ZM19.1403 25.4739C18.9823 24.7885 19.0579 24.1528 19.2941 23.609L21.2029 25.5179L21.8566 28.3531C22.4845 31.0769 19.3741 33.1037 17.136 31.4291L16.4212 30.8943C15.6933 30.3496 14.6751 30.9803 14.8384 31.8746L15.1276 33.4582L13.1601 33.8175L12.871 32.2339C12.381 29.5508 15.4356 27.6589 17.6194 29.2929L18.3342 29.8277C19.0802 30.3859 20.117 29.7103 19.9077 28.8024L19.1403 25.4739Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.7072 35.293L12.707 11.2928C15.7097 8.62226 19.6654 7 24 7C33.3888 7 41 14.6112 41 24C41 28.3346 39.3777 32.2903 36.7072 35.293ZM34.3603 13.9166C32.9174 12.4736 30.2854 12.7661 28.4817 14.5698C26.678 16.3735 26.3856 19.0054 27.8285 20.4484L27.8514 20.4711L28.2826 24.084C28.2838 24.0946 28.2849 24.1051 28.2859 24.1156L29.8902 25.7199C30.1997 25.195 30.3532 24.5568 30.2685 23.847L29.9717 21.3599C31.2223 21.4243 32.6162 20.8862 33.7072 19.7952C35.5109 17.9915 35.8033 15.3596 34.3603 13.9166Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5C34.4934 5 43 13.5066 43 24Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}