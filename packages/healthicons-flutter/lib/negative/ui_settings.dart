import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UiSettings extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const UiSettings({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34ZM24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM20 6V7.20194C19.334 13.8313 17.1051 14.7619 10.6346 11.6647L10.4115 11.5359L6.4115 18.4641L7.34419 19.0026C12.6837 22.7927 12.6855 25.1559 7.44667 28.9383L6.4115 29.5359L10.4115 36.4641L10.8458 36.2134C17.1808 33.1931 19.3296 34.2078 20 40.8335V42H28V41.6958L28.027 42.0249C28.5346 34.548 30.4715 33.1184 36.827 36.0245L37.5884 36.4641L41.5684 29.5706L41.5884 29.5359L41.1316 29.2722C35.2332 25.1979 35.2936 22.7886 41.1984 18.6893L41.5884 18.4641L37.5884 11.5359L36.898 11.9345C30.6619 14.8428 28.6178 13.6002 28 6.7335V6H20Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}