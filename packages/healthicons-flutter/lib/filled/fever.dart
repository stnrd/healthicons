import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Fever extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Fever({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 6C26.711 6 29.2821 6.59934 31.5879 7.67275C31.2685 8.25767 30.9798 8.86392 30.7388 9.48411C28.6907 8.53171 26.4075 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 22.47 39.7852 20.9901 39.3842 19.5889C40.0349 19.3563 40.6407 19.0311 41.1852 18.6296C41.7147 20.3257 42 22.1295 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6Z" fill="#333333"/>
<path d="M41 13C41 15.2091 39.2091 17 37 17C34.7909 17 33 15.2091 33 13C33 9.5 37 6 37 6C37 6 41 9.5 41 13Z" fill="#333333"/>
<path d="M16.5935 33C16.8178 32.4194 17.0799 31.8686 17.3757 31.3534L15.6648 29.8869C15.4568 29.9601 15.233 30 15 30C13.8954 30 13 29.1046 13 28C13 26.8954 13.8954 26 15 26C16.1046 26 17 26.8954 17 28C17 28.1258 16.9884 28.2489 16.9662 28.3682L18.534 29.7121C19.9953 28.0232 21.9073 27 24 27C27.2304 27 30.0305 29.4383 31.4065 33C31.7939 34.0028 30.9866 35 29.9116 35H24.433L19.2297 30.494L17.9205 32.0059L21.3778 35H18.0883C17.0133 35 16.2061 34.0028 16.5935 33Z" fill="#333333"/>
<path d="M14.6956 21.7576C14.0125 21.3201 13.512 20.6126 13.6311 19.8749C13.6549 19.7272 13.7437 19.5979 13.873 19.5226C14.0022 19.4472 14.1585 19.4338 14.2987 19.4858C16.117 20.1609 18.145 19.7422 19.9409 18.0374C20.0647 17.9198 20.2399 17.8736 20.4056 17.9148C20.5713 17.9559 20.7046 18.0788 20.759 18.2406C20.9907 18.9294 20.7831 19.8589 20.2788 20.6223C19.7568 21.4125 18.8712 22.1038 17.6253 22.2877C16.4269 22.4646 15.4093 22.2147 14.6956 21.7576Z" fill="#333333"/>
<path d="M32.6425 21.7576C33.3255 21.3201 33.826 20.6126 33.7069 19.8749C33.6831 19.7272 33.5943 19.5979 33.4651 19.5226C33.3358 19.4472 33.1796 19.4338 33.0393 19.4858C31.221 20.1609 29.1931 19.7422 27.3972 18.0374C27.2733 17.9198 27.0981 17.8736 26.9324 17.9148C26.7667 17.9559 26.6335 18.0788 26.579 18.2406C26.3473 18.9294 26.5549 19.8589 27.0593 20.6223C27.5813 21.4125 28.4668 22.1038 29.7127 22.2877C30.9111 22.4646 31.9287 22.2147 32.6425 21.7576Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}