import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DiabetesMeasure extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const DiabetesMeasure({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.9558 8.19629L14.9558 8.21103L14.9706 26.211L32.9705 26.1963L32.9558 8.19629ZM23.967 21.8704C26.207 21.8685 27.9656 20.1909 27.9639 18.0576C27.9623 16.0766 23.9583 11.2037 23.9583 11.2037C23.9583 11.2037 19.9621 15.9308 19.9639 18.0641C19.9656 20.1974 21.727 21.8722 23.967 21.8704Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9845 28.9869C15.984 28.4347 16.4314 27.9866 16.9836 27.9861L20.9836 27.9828C21.5359 27.9824 21.984 28.4297 21.9845 28.982C21.9849 29.5343 21.5376 29.9824 20.9853 29.9828L16.9853 29.9861C16.433 29.9866 15.9849 29.5392 15.9845 28.9869Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9845 28.9788C25.984 28.4265 26.4314 27.9784 26.9836 27.9779L30.9836 27.9747C31.5359 27.9742 31.984 28.4216 31.9845 28.9738C31.9849 29.5261 31.5376 29.9742 30.9853 29.9747L26.9853 29.9779C26.433 29.9784 25.9849 29.531 25.9845 28.9788Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9543 6.2126L34.9543 6.19458C35.5065 6.19413 35.9546 6.64148 35.9551 7.19376L35.9755 32.1938C35.976 32.746 35.5287 33.1941 34.9764 33.1946L28.9764 33.1995L28.978 35.1995L34.978 35.1946C36.6349 35.1932 37.9769 33.849 37.9755 32.1921L37.9551 7.19212C37.9537 5.53527 36.6095 4.19322 34.9526 4.19458L12.9526 4.2126C11.2958 4.21396 9.95372 5.5582 9.95508 7.21506L9.97556 32.215C9.97691 33.8719 11.3212 35.2139 12.978 35.2126L18.978 35.2077L18.9764 33.2077L12.9764 33.2126C12.4241 33.213 11.976 32.7657 11.9756 32.2134L11.9551 7.21342C11.9546 6.66113 12.402 6.21305 12.9543 6.2126Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9762 33.2003L19.9762 33.2069L19.9836 42.2069L27.9836 42.2003L27.9762 33.2003ZM17.9746 31.2085L17.9853 44.2085L29.9853 44.1987L29.9746 31.1987L17.9746 31.2085Z" fill="#333333"/>
<path d="M25.9804 38.202C25.9813 39.3066 25.0866 40.2028 23.982 40.2037C22.8775 40.2046 21.9813 39.3099 21.9804 38.2053C21.9795 37.1008 22.8742 36.2046 23.9788 36.2037C25.0833 36.2028 25.9795 37.0975 25.9804 38.202Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}