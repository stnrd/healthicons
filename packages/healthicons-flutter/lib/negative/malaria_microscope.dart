import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MalariaMicroscope extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MalariaMicroscope({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 3.99999 12.9543 3.99999 24C3.99999 35.0457 12.9543 44 24 44ZM10.745 21.3088C11.9252 22.8359 15.372 22.1495 18.4437 19.7757C21.5154 17.4019 23.0489 14.2396 21.8687 12.7125C20.6886 11.1854 17.2418 11.8718 14.1701 14.2456C11.0983 16.6194 9.5649 19.7817 10.745 21.3088ZM32.4393 26.8501C35.7259 28.8346 37.5904 31.7679 36.6039 33.4018C35.6173 35.0357 32.1532 34.7516 28.8666 32.7672C25.58 30.7827 23.7155 27.8494 24.702 26.2155C25.6886 24.5815 29.1527 24.8657 32.4393 26.8501ZM33.2707 22.8553C35.0199 22.0371 35.1036 18.5216 33.4578 15.0033C31.812 11.485 29.0598 9.29611 27.3107 10.1143C25.5615 10.9326 25.4778 14.448 27.1236 17.9664C28.7694 21.4847 31.5216 23.6735 33.2707 22.8553ZM21.62 29.9331C23.4041 33.4821 23.4201 37.0783 21.6556 37.9652C19.8912 38.8522 17.0145 36.6942 15.2304 33.1451C13.4463 29.596 13.4304 25.9999 15.1948 25.1129C16.9592 24.2259 19.8359 26.384 21.62 29.9331Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}