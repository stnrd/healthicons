import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Body extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Body({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 13C26.4853 13 28.5 10.9853 28.5 8.5C28.5 6.01472 26.4853 4 24 4C21.5147 4 19.5 6.01472 19.5 8.5C19.5 10.9853 21.5147 13 24 13ZM37.9201 15.4404C38.2292 16.5008 37.6201 17.6111 36.5596 17.9201C34.1842 18.6124 32.0379 19.1337 30 19.4812V30.9944L30 31V42C30 43.0693 29.1589 43.9495 28.0906 43.998C27.0224 44.0464 26.105 43.246 26.0082 42.1811L25.0082 31.1811C25.0027 31.1206 25 31.0602 25 31H23C23 31.0602 22.9973 31.1206 22.9918 31.1811L21.9918 42.1811C21.895 43.246 20.9776 44.0464 19.9094 43.998C18.8412 43.9495 18 43.0693 18 42L18 19.4443C15.9674 19.0938 13.8288 18.583 11.4653 17.9272C10.4009 17.6319 9.7775 16.5296 10.0728 15.4653C10.3682 14.4009 11.4704 13.7775 12.5348 14.0728C17.1431 15.3515 20.6058 15.9845 24.0087 15.9997C27.4047 16.0149 30.8587 15.4152 35.4404 14.0799C36.5009 13.7708 37.6111 14.3799 37.9201 15.4404Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}