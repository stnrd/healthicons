import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CervicalCancer extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CervicalCancer({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.7345 14.4552L25.1532 16.3L28.9229 20.6979L27.6487 21.9021L24 17.6454L20.3514 21.9021L19.0772 20.6979L22.8469 16.3L21.2656 14.4552C20.2144 13.2287 20.2613 11.3529 21.3725 10.1861C21.7299 9.81084 22.2147 9.6 22.7202 9.6H25.2799C25.7854 9.6 26.2702 9.81084 26.6276 10.1861C27.7388 11.3529 27.7857 13.2287 26.7345 14.4552ZM22.5847 11.4589C22.6206 11.4212 22.6693 11.4 22.7202 11.4H25.2799C25.3307 11.4 25.3795 11.4212 25.4154 11.4589C25.8819 11.9487 25.9016 12.7362 25.4603 13.251L24 14.9546L22.5398 13.251C22.0985 12.7362 22.1182 11.9487 22.5847 11.4589Z" fill="#333333"/>
<path d="M31.8792 24.1731L24.8571 31.5462V41.9999H23.1429V31.5462L16.1208 24.1731L17.333 22.9003L24 29.9006L30.667 22.9003L31.8792 24.1731Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM10.705 6H37.295C40.421 13.8479 42.0079 20.1062 42 25.8515C41.9923 31.4661 40.4624 36.5114 37.4957 42.0001H10.5043C7.53757 36.5114 6.00774 31.4661 6.00003 25.8515C5.99214 20.1062 7.57899 13.8479 10.705 6Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}