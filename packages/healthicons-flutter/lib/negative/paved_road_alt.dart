import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PavedRoadAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const PavedRoadAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48.0195 1.01966L0.0195368 0.980347L-0.0197754 48.9803L47.9802 49.0196L48.0195 1.01966ZM13.013 8.9512C13.0139 7.84663 13.9101 6.95193 15.0147 6.95283L33.0146 6.96758C34.1192 6.96848 35.0139 7.86465 35.013 8.96921L34.9868 40.9692C34.9859 42.0738 34.0897 42.9685 32.9852 42.9676L14.9852 42.9528C13.8806 42.9519 12.9859 42.0558 12.9868 40.9512L13.013 8.9512ZM24.0311 10.9803C23.4788 10.9799 23.0307 11.4272 23.0303 11.9795L23.027 15.9795C23.0266 16.5318 23.4739 16.9799 24.0262 16.9803C24.5785 16.9808 25.0266 16.5334 25.027 15.9812L25.0303 11.9812C25.0307 11.4289 24.5834 10.9808 24.0311 10.9803ZM24.0221 21.9803C23.4698 21.9799 23.0217 22.4272 23.0213 22.9795L23.018 26.9795C23.0176 27.5318 23.4649 27.9799 24.0172 27.9803C24.5695 27.9808 25.0176 27.5334 25.018 26.9812L25.0213 22.9812C25.0217 22.4289 24.5744 21.9808 24.0221 21.9803ZM23.0123 33.9795C23.0127 33.4272 23.4608 32.9799 24.0131 32.9803C24.5654 32.9808 25.0127 33.4289 25.0123 33.9812L25.009 37.9812C25.0085 38.5334 24.5605 38.9808 24.0082 38.9803C23.4559 38.9799 23.0085 38.5318 23.009 37.9795L23.0123 33.9795Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="48" height="48" fill="white" transform="translate(0.0195312 0.980347)"/>
</clipPath>
</defs>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}