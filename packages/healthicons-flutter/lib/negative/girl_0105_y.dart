import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Girl0105Y extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Girl0105Y({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H48V48.5H0V0.5ZM24 17.5C25.933 17.5 27.5 15.933 27.5 14C27.5 12.067 25.933 10.5 24 10.5C22.067 10.5 20.5 12.067 20.5 14C20.5 15.933 22.067 17.5 24 17.5ZM34.5075 21.9221C35.576 21.6419 36.2149 20.5485 35.9347 19.4801C35.6544 18.4117 34.5611 17.7727 33.4927 18.053C29.6844 19.0519 26.8207 19.4987 24.008 19.4873C21.1891 19.476 18.3176 19.0043 14.4847 18.0471C13.413 17.7795 12.3273 18.4313 12.0597 19.503C11.7921 20.5746 12.4439 21.6603 13.5155 21.928C15.3645 22.3897 17.0504 22.7562 18.6542 23.0177C18.3391 25.1186 16.6592 28.577 15.6905 30.4435C15.366 31.0687 15.7556 31.8385 16.4544 31.927C22.3908 32.6792 26.1458 32.6987 31.609 31.9387C32.2899 31.844 32.6698 31.1013 32.3629 30.4861C31.4194 28.5948 29.7229 25.015 29.3626 23.0431C30.9666 22.7825 32.6543 22.4082 34.5075 21.9221ZM19 37.0001V33.5138C20.373 33.7177 21.646 33.8485 22.8885 33.9077L21.9482 37.391C21.7521 38.1173 21.0485 38.586 20.3028 38.4871C19.5571 38.3882 19 37.7523 19 37.0001ZM27.0518 37.391L26.1096 33.901C27.3529 33.8369 28.6264 33.7027 30 33.5V37.0001C30 37.7523 29.4429 38.3882 28.6972 38.4871C27.9515 38.586 27.2479 38.1173 27.0518 37.391Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="48" height="48" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}