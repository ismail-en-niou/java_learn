public class main {
    public static void main (String [] args)
    {
        Point a = new Point( 2 , 3);
        Point b = new Point (1,5);
        Segment s = new Segment(a,b);
        System.out.println("that the length of " + Segment.longueur());

    }
}