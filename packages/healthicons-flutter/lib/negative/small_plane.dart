import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SmallPlane extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SmallPlane({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM8.32258 17.6129L11.8064 14.129C11.8064 14.129 11.8065 16.4516 14.129 18.7742L16.4516 21.0968L7.41421 30.1342C6.63316 30.9152 6.63316 32.1816 7.41421 32.9626L8.56481 34.1132C9.12369 34.6721 9.95929 34.8494 10.697 34.5657L24.5806 29.2258L33.871 36.1936L31.856 40.2234C31.6723 40.5909 31.7443 41.0346 32.0348 41.3251C32.4075 41.6978 33.0118 41.6978 33.3845 41.3251L41.3251 33.3845C41.6978 33.0118 41.6978 32.4075 41.3251 32.0348C41.0346 31.7443 40.5909 31.6723 40.2234 31.856L36.1936 33.871L29.2258 24.5806L34.5657 10.697C34.8494 9.95929 34.6721 9.12369 34.1132 8.56481L32.9626 7.41421C32.1816 6.63316 30.9152 6.63316 30.1342 7.41421L21.0968 16.4516L18.7742 14.129C16.4516 11.8065 14.129 11.8064 14.129 11.8064L17.6129 8.32258C18.7742 7.16129 17.6129 6 16.4516 7.16129L7.16129 16.4516C6 17.6129 7.16129 18.7742 8.32258 17.6129Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}