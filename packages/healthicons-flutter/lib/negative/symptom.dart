import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Symptom extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Symptom({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM16 16C17.1046 16 18 16.8954 18 18C18 19.1046 17.1046 20 16 20C14.8954 20 14 19.1046 14 18C14 16.8954 14.8954 16 16 16ZM18 25.985V21.4649C17.4117 21.8052 16.7286 22 16 22C14.5194 22 13.2267 21.1956 12.5351 20H12C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16H12.5351C13.2267 14.8044 14.5194 14 16 14C17.4806 14 18.7733 14.8044 19.4649 16H36C37.1046 16 38 16.8954 38 18C38 19.1046 37.1046 20 36 20H30.6458C31.4762 20.7329 32 21.8053 32 23C32 24.4806 31.1956 25.7733 30 26.4649V29C30 28.9936 30.0004 28.9963 30.0023 29.0092C30.009 29.055 30.0343 29.2287 30.1268 29.5781C30.2321 29.9761 30.3905 30.4791 30.5931 31.0645C30.9974 32.2325 31.5441 33.6312 32.1011 34.9927C32.6561 36.3495 33.2124 37.6475 33.6305 38.6077C33.8394 39.0873 34.0133 39.4816 34.1348 39.7553C34.1955 39.8922 34.2431 39.9989 34.2753 40.071L34.3119 40.1527L34.3211 40.1731L34.3233 40.178L34.3238 40.1791L34.3238 40.1793C34.7464 41.1183 34.3869 42.2248 33.493 42.7361C32.5992 43.2473 31.4632 42.9963 30.868 42.156L29.368 40.0384L24 32.4601L22.8832 34.0366C22.9595 34.3452 23 34.6679 23 35C23 37.0809 21.411 38.7907 19.3801 38.9822L17.132 42.156C16.5368 42.9963 15.4008 43.2473 14.5069 42.7361C13.6131 42.2248 13.2535 41.1183 13.6761 40.1793L13.7246 40.071C13.7569 39.9989 13.8044 39.8922 13.8652 39.7553C13.9866 39.4816 14.1605 39.0873 14.3694 38.6077C14.6309 38.0072 14.9465 37.2745 15.2819 36.478C15.1 36.0208 15 35.5221 15 35C15 33.4002 15.9392 32.0198 17.2962 31.38C17.3341 31.2731 17.3711 31.1679 17.4068 31.0645C17.6095 30.4791 17.7678 29.9761 17.8732 29.5781C17.9656 29.2289 17.991 29.0551 17.9977 29.0093L17.9977 29.0092V29.0092C17.9995 28.9963 17.9999 28.9936 17.9999 29V26L18 25.985ZM28 25C29.1046 25 30 24.1046 30 23C30 21.8954 29.1046 21 28 21C26.8954 21 26 21.8954 26 23C26 24.1046 26.8954 25 28 25ZM24 13C26.4853 13 28.5 10.9853 28.5 8.5C28.5 6.01776 26.4902 4.00493 24.0091 4.00001L24.0043 4L24 4L23.9957 4L23.9909 4.00001C21.5098 4.00493 19.5 6.01776 19.5 8.5C19.5 10.9853 21.5147 13 24 13ZM42 24C42 29.7603 39.2942 34.8886 35.0843 38.1833L36.288 39.781C40.9816 36.1211 44 30.413 44 24C44 15.2703 38.407 7.84686 30.6088 5.11769L29.9479 7.00592C36.9663 9.46218 42 16.1432 42 24ZM24 42C25.5416 42 27.0379 41.8062 28.466 41.4416L28.9416 43.3849C27.3611 43.7865 25.7055 44 24 44C22.3284 44 20.7046 43.7949 19.1526 43.4085L19.6282 41.4654C21.0278 41.8146 22.4922 42 24 42ZM12.9787 38.2324C8.7328 34.9397 6 29.789 6 24C6 16.1432 11.0337 9.46218 18.0521 7.00592L17.3912 5.11769C9.59303 7.84686 4 15.2703 4 24C4 30.4417 7.04544 36.1721 11.7751 39.83L12.9787 38.2324ZM19 37C20.1046 37 21 36.1046 21 35C21 33.8954 20.1046 33 19 33C17.8954 33 17 33.8954 17 35C17 36.1046 17.8954 37 19 37Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}