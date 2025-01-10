public class Segment {
    private Point start;
    private Point end;

    public Segment(Point start, Point end) {
        this.start = start;
        this.end = end;
    }
    public Point getStart()
    {
        return this.start;
    }

    public Point getEnd()
    {
        return this.end;
    }
    public void setStart(Point start)
    {
        this.start = start;
    }

    public void setEnd ( Point end)
    {
        this.end = end ;
    }
    public float longueur ()
    {
        float x = math.pow(start.getX() - end.getX(),2);
        float y =  math.pow(start.getY() - end.getY() ,2);
        float res = math.sqrt(x+y);
        return (res);
    }
}