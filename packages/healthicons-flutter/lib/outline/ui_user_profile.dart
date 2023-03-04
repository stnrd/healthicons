import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiUserProfile extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiUserProfile({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8088 34.7137C21.6538 33.7141 26.367 33.8003 33.221 34.749C34.2376 34.8897 35 35.77 35 36.8177C35 37.2976 34.8349 37.7641 34.537 38.1273C33.9887 38.7959 33.4572 39.4199 32.941 40H35.5823C35.7483 39.8021 35.9153 39.6006 36.0835 39.3955C36.681 38.6669 37 37.7499 37 36.8177C37 34.7928 35.5221 33.0484 33.4952 32.7679C26.4791 31.7968 21.5747 31.7044 14.5198 32.7347C12.472 33.0337 11 34.8063 11 36.8449C11 37.7504 11.2948 38.6441 11.854 39.3703C12.0186 39.584 12.1821 39.7939 12.3448 40H14.9209C14.4402 39.4261 13.9466 38.8097 13.4386 38.15C13.1554 37.7823 13 37.32 13 36.8449C13 35.7682 13.7739 34.8648 14.8088 34.7137Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}