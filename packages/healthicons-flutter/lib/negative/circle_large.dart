import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CircleLarge extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CircleLarge({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V47.9994H47.9994V0H0ZM23.9997 3.99995C26.6261 3.99995 29.2268 4.51726 31.6533 5.52234C34.0798 6.52742 36.2845 8.00059 38.1417 9.85774C39.9988 11.7149 41.472 13.9196 42.4771 16.3461C43.4821 18.7726 43.9994 21.3733 43.9995 23.9997C43.9994 29.304 41.8923 34.391 38.1417 38.1417C34.391 41.8923 29.304 43.9995 23.9997 43.9995C21.3733 43.9995 18.7726 43.4821 16.3461 42.4771C13.9196 41.472 11.7149 39.9988 9.85774 38.1417C6.10706 34.391 3.99995 29.304 3.99995 23.9997C3.99995 18.6954 6.10706 13.6084 9.85774 9.85774C13.6084 6.10706 18.6954 3.99995 23.9997 3.99995Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}