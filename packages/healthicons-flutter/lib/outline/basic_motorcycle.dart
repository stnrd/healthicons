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
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 36C35.0147 36 33 33.9853 33 31.5C33 29.0147 35.0147 27 37.5 27C39.9853 27 42 29.0147 42 31.5C42 33.9853 39.9853 36 37.5 36ZM37.5 38C33.9101 38 31 35.0899 31 31.5C31 27.9101 33.9101 25 37.5 25C41.0899 25 44 27.9101 44 31.5C44 35.0899 41.0899 38 37.5 38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.4157 10.598C29.2561 10.2347 28.8969 10 28.5 10H23V12H27.8469L36.5843 31.902C36.8064 32.4077 37.3963 32.6377 37.902 32.4156C38.4077 32.1936 38.6376 31.6037 38.4156 31.098L29.4157 10.598Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 36C8.01472 36 6 33.9853 6 31.5C6 29.0147 8.01472 27 10.5 27C12.9853 27 15 29.0147 15 31.5C15 33.9853 12.9853 36 10.5 36ZM10.5 38C6.91015 38 4 35.0899 4 31.5C4 27.9101 6.91015 25 10.5 25C14.0899 25 17 27.9101 17 31.5C17 35.0899 14.0899 38 10.5 38Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.6306 22.7239C33.202 22.3756 32.5722 22.4408 32.2239 22.8694L26.024 30.5H10.5C9.94772 30.5 9.5 30.9477 9.5 31.5C9.5 32.0523 9.94772 32.5 10.5 32.5H26.5C26.8011 32.5 27.0862 32.3643 27.2761 32.1306L33.7761 24.1306C34.1244 23.702 34.0592 23.0722 33.6306 22.7239Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.9032 16H27.7316C23.63 16 20.0495 18.7786 19.0313 22.7517L20 23V24H33V22H21.4182C22.5536 19.5934 24.9932 18 27.7316 18H30.9032V16Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5517 18.2806C16.3653 18.1006 16.1163 18 15.8571 18H7C6.44771 18 6 18.4477 6 19V23C6 23.5523 6.44771 24 7 24H20C20.4077 24 20.7745 23.7525 20.9272 23.3746C21.0799 22.9966 20.9879 22.5638 20.6946 22.2806L16.5517 18.2806ZM15.4532 20L17.5246 22H8V20H15.4532Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.7849 13.6267L31.141 16.5667L31.859 18.4333L37.2151 16.3733L37.7865 19.8015L32.6521 19.0116L32.3479 20.9884L40.2135 22.1985L38.7849 13.6267Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6258 31.9856L20.1258 27.4856L21.8742 26.5144L24.3742 31.0144L22.6258 31.9856Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 22H19C17.3431 22 16 23.3431 16 25C16 26.6569 17.3431 28 19 28H25C26.6569 28 28 26.6569 28 25V22ZM26 24V25C26 25.5523 25.5523 26 25 26H19C18.4477 26 18 25.5523 18 25C18 24.4477 18.4477 24 19 24H26Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}