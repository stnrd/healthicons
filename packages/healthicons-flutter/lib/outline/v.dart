import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class V extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const V({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2306 37.1538C21.6964 38.2718 22.7887 39 23.9998 39C25.2109 39 26.3032 38.2718 26.769 37.1538L36.769 13.1538C37.4063 11.6244 36.6831 9.86802 35.1537 9.23077C33.6243 8.59352 31.8678 9.31675 31.2306 10.8462L23.9998 28.2L16.769 10.8462C16.1318 9.31675 14.3754 8.59352 12.846 9.23077C11.3166 9.86802 10.5933 11.6244 11.2306 13.1538L21.2306 37.1538ZM23.9998 37C23.5961 37 23.232 36.7573 23.0767 36.3846L13.0767 12.3846C12.8643 11.8748 13.1054 11.2893 13.6152 11.0769C14.125 10.8645 14.7105 11.1056 14.9229 11.6154L23.0767 31.1846C23.232 31.5573 23.5961 31.8 23.9998 31.8C24.4035 31.8 24.7676 31.5573 24.9229 31.1846L33.0767 11.6154C33.2891 11.1056 33.8746 10.8645 34.3844 11.0769C34.8942 11.2893 35.1353 11.8748 34.9229 12.3846L24.9229 36.3846C24.7676 36.7573 24.4035 37 23.9998 37Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}