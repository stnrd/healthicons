import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ContraceptiveDiaphragm extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ContraceptiveDiaphragm({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM37.9553 25.13C37.9849 24.7851 38 24.4229 38 24.0426C38 16.2871 31.732 10 24 10C16.268 10 10 16.2871 10 24.0426C10 24.4468 10.017 24.8305 10.0504 25.1947L10.0306 25.1986C10.0103 25.5348 10 25.8741 10 26.2162C10 27.3895 10.1221 28.3753 10.3403 29.2051C10.4808 29.7392 10.1616 30.2861 9.62751 30.4266C9.09339 30.567 8.54652 30.2479 8.40606 29.7138C8.13585 28.6863 8 27.5251 8 26.2162C8 26.0473 8.00227 25.8789 8.00679 25.7111C3.19911 27.6685 1.42927 37 24.271 37C47.1758 37 44.4057 28.1108 39.9938 25.7329C39.9979 25.8935 40 26.0546 40 26.2162C40 27.7865 39.8044 29.1454 39.4153 30.3156C39.241 30.8396 38.6749 31.1232 38.1508 30.9489C37.6268 30.7746 37.3432 30.2085 37.5175 29.6844C37.824 28.7626 38 27.6249 38 26.2162C38 25.8515 37.9883 25.49 37.9652 25.1321L37.9553 25.13ZM21.2957 16.0301C21.4549 16.559 21.1553 17.1167 20.6264 17.2759C19.2979 17.6758 18.1322 18.4903 17.2998 19.6002C16.4674 20.7102 16.012 22.0573 16.0002 23.4447C15.9955 23.9969 15.544 24.4408 14.9917 24.4361C14.4395 24.4314 13.9956 23.9799 14.0003 23.4276C14.0157 21.6134 14.6113 19.8517 15.6998 18.4003C16.7883 16.9488 18.3127 15.8837 20.0499 15.3608C20.5788 15.2016 21.1366 15.5013 21.2957 16.0301Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}