import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MinerWorkerAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MinerWorkerAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.6554 20.7505H25.4825V40.3654C25.4825 41.2644 24.747 42 23.848 42C22.9489 42 22.2134 41.2644 22.2134 40.3654V32.1926H18.9442V40.3654C18.9442 41.2644 18.2087 42 17.3097 42C16.4106 42 15.6751 41.2644 15.6751 40.3654V20.7505V28.2167C14.7761 28.2167 12 26.5056 12 22.2919C12 19.116 14.7761 17.4814 15.6751 17.4814H33.6554C34.5544 17.4814 35.29 18.2169 35.29 19.116C35.29 20.015 34.5544 20.7505 33.6554 20.7505Z" fill="#333333"/>
<path d="M34 10.9999V40.9999H32V10.9999C32.9104 10.9999 32.9104 11.0002 34 10.9999Z" fill="#333333"/>
<path d="M26 15C26 13.3431 29.134 12 33 12C36.866 12 40 13.3431 40 15C35 13.5 31.5 13.5 26 15Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 10.5H23.0979C23.566 11.0659 23.848 11.7905 23.848 12.5777C23.848 14.3758 22.3769 15.8469 20.5788 15.8469C18.7808 15.8469 17.3097 14.3758 17.3097 12.5777C17.3097 11.7905 17.5917 11.0659 18.0597 10.5H16C16 8.01472 18.0147 6 20.5 6C22.9853 6 25 8.01472 25 10.5ZM20.5 10C21.3284 10 22 9.32843 22 8.5C22 7.67157 21.3284 7 20.5 7C19.6716 7 19 7.67157 19 8.5C19 9.32843 19.6716 10 20.5 10Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}