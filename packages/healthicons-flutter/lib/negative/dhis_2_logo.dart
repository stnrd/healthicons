import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Dhis2Logo extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Dhis2Logo({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9255 9.0141L9.01799 19.1775C9.01333 19.1805 9.01257 19.1817 9.01327 19.1809C9.01372 19.1804 9.01303 19.181 9.01151 19.1838C9.00778 19.1907 9.00089 19.2083 9.00008 19.2348C8.99926 19.2612 9.00502 19.2803 9.00906 19.289C9.01077 19.2927 9.01195 19.2942 9.01226 19.2946L9.01301 19.2955C9.01392 19.2964 9.01578 19.2981 9.0192 19.3007L24.926 30.9824L40.9809 19.3009C40.9863 19.297 40.9878 19.295 40.9878 19.295C40.9879 19.2948 40.9884 19.2943 40.989 19.2932C40.9895 19.2924 40.9901 19.2912 40.9909 19.2896C40.9949 19.281 41.0007 19.2618 40.9999 19.2351C40.9991 19.2085 40.9921 19.1907 40.9884 19.1839C40.9869 19.1812 40.9863 19.1807 40.9868 19.1812C40.9876 19.1821 40.9869 19.1809 40.9821 19.1779L24.9255 9.0141ZM25.9589 15.3012L35.2879 21.2064L33.5482 22.4722L24.9255 17.0141L16.386 22.47L14.6578 21.2008L23.8849 15.3057C24.5202 14.8997 25.3219 14.898 25.9589 15.3012Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM7.9412 17.4921C6.7331 18.264 6.67746 20.0623 7.83537 20.9127L23.7795 32.6218C24.4636 33.1242 25.3789 33.1262 26.0651 32.627L42.1575 20.9182C43.325 20.0687 43.2692 18.2586 42.0518 17.488L25.9589 7.3012C25.3219 6.898 24.5202 6.89972 23.8849 7.30565L7.9412 17.4921ZM9.23713 24.6641L10.9654 25.9333L9.01799 27.1775C9.01519 27.1793 9.01328 27.1809 9.01328 27.1809L9.01151 27.1838C9.00778 27.1907 9.00089 27.2083 9.00008 27.2348C8.99926 27.2612 9.00502 27.2803 9.00906 27.289C9.01077 27.2927 9.01227 27.2946 9.01227 27.2946C9.01227 27.2946 9.014 27.2968 9.0192 27.3007L24.926 38.9824L40.9252 27.3414C40.1718 29.507 40.7445 27.8731 40.9325 27.3361L40.9809 27.3009C40.9863 27.297 40.9878 27.295 40.9878 27.295L40.9892 27.2928L40.9909 27.2896C40.9949 27.281 41.0007 27.2618 40.9999 27.2351C40.9991 27.2085 40.9921 27.1907 40.9884 27.1839L40.9868 27.1812L40.9325 27.3361L40.9252 27.3414L40.9821 27.1779L39.0018 25.9243L40.7415 24.6585L42.0518 25.488C43.2692 26.2586 43.325 28.0687 42.1575 28.9182L26.0651 40.627C25.3789 41.1262 24.4636 41.1242 23.7795 40.6218L7.83537 28.9127C6.67746 28.0623 6.7331 26.264 7.9412 25.4921L9.23713 24.6641Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}