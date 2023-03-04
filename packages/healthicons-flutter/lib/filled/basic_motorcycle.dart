import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BasicMotorcycle extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BasicMotorcycle({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 35C35.567 35 34 33.433 34 31.5C34 29.567 35.567 28 37.5 28C39.433 28 41 29.567 41 31.5C41 33.433 39.433 35 37.5 35ZM37.5 38C33.9101 38 31 35.0899 31 31.5C31 27.9101 33.9101 25 37.5 25C41.0899 25 44 27.9101 44 31.5C44 35.0899 41.0899 38 37.5 38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.4157 10.598C29.2561 10.2347 28.8969 10 28.5 10H23V12H27.8469L36.5843 31.902C36.8064 32.4077 37.3963 32.6377 37.902 32.4156C38.4077 32.1936 38.6376 31.6037 38.4156 31.098L29.4157 10.598Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 35C8.567 35 7 33.433 7 31.5C7 29.567 8.567 28 10.5 28C12.433 28 14 29.567 14 31.5C14 33.433 12.433 35 10.5 35ZM10.5 38C6.91015 38 4 35.0899 4 31.5C4 27.9101 6.91015 25 10.5 25C14.0899 25 17 27.9101 17 31.5C17 35.0899 14.0899 38 10.5 38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.6306 22.7239C33.202 22.3756 32.5722 22.4408 32.2239 22.8694L26.024 30.5H10.5C9.94771 30.5 9.5 30.9477 9.5 31.5C9.5 32.0523 9.94771 32.5 10.5 32.5H26.5C26.8011 32.5 27.0862 32.3643 27.2761 32.1306L33.7761 24.1306C34.1244 23.702 34.0592 23.0722 33.6306 22.7239Z" fill="#333333"/>
<path d="M28 25H17.5C16.6716 25 16 25.6716 16 26.5C16 27.3284 16.6716 28 17.5 28H25C26.6569 28 28 26.6569 28 25Z" fill="#333333"/>
<path d="M27.9421 17H23.6847C20.5432 17 18.2381 19.9523 19 23H29.3819C30.1253 23 30.6088 22.2177 30.2764 21.5528L28.0259 17.0518C28.01 17.0201 27.9776 17 27.9421 17Z" fill="#333333"/>
<path d="M6 19C6 18.4477 6.44772 18 7 18H12.0969C13.6158 18 15.0524 18.6904 16.0012 19.8765L17.2002 21.3753C17.7241 22.0301 17.2579 23 16.4194 23H7C6.44772 23 6 22.5523 6 22V19Z" fill="#333333"/>
<path d="M34 16.5L40.0667 14L41 20L34.9333 19L34 16.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6258 31.9856L20.1258 27.4856L21.8742 26.5144L24.3742 31.0144L22.6258 31.9856Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}